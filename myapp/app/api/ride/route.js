import Host from "@/models/Host";
import Ride from "@/models/Ride";

export async function POST(req) {
    await db.connect()

    const hostId = req.params.hostid;
    // const accessToken = req.headers.get("authorization")
    // const token = accessToken.split(' ')[1]

    // const decodedToken = verifyJwtToken(token)

    // if (!accessToken || !decodedToken) {
    //     return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    // }

    try {
        const body = await req.json()
        const newRide = await Ride.create(body)
        try {
            await Host.findByIdAndUpdate(hostId, {
                $push: {rides: newRide._id},
            })
        } catch (error) {
            return new Response(JSON.stringify(null), { status: 500 })

        }

        return new Response(JSON.stringify(newHost), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}