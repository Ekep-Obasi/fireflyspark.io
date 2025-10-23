export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        const response = await fetch('https://api.fireflyspark.ca/api/v1/waitlist/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // Handle 409 Conflict - already registered
        if (response.status === 409) {
            return new Response(JSON.stringify({ success: true, message: 'This phone number was already registered.' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Handle 204 No Content response
        if (response.status === 204) {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!response.ok) {
            return new Response(JSON.stringify({ error: `API error: ${response.status}` }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Waitlist API error:', error);
        return new Response(JSON.stringify({ error: 'Failed to submit to waitlist' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
