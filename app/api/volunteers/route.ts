export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { invite, ...volunteerData } = body;

    // Validate invite if provided
    if (invite) {
      try {
        const inviteResponse = await fetch(
          `https://api.fireflyspark.ca/api/v1/volunteers/invites/validate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ invite }),
          },
        );

        if (!inviteResponse.ok) {
          if (inviteResponse.status === 404 || inviteResponse.status === 410) {
            return new Response(
              JSON.stringify({
                error: "This invitation is invalid or has expired.",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              },
            );
          }
          return new Response(
            JSON.stringify({ error: "Failed to validate invitation" }),
            {
              status: inviteResponse.status,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      } catch (error) {
        console.error("Invite validation error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to validate invitation" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Submit volunteer data to backend
    const response = await fetch(
      "https://api.fireflyspark.ca/api/v1/volunteers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...volunteerData,
          invite: invite || undefined,
        }),
      },
    );

    // Handle 409 Conflict - already registered
    if (response.status === 409) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "You have already submitted a volunteer application.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Handle 204 No Content response
    if (response.status === 204) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return new Response(
        JSON.stringify({
          error: errorData.message || `API error: ${response.status}`,
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Volunteers API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit volunteer application" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
