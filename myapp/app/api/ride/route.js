import Host from "@/models/Host";
import Ride from "@/models/Ride";
import db from "@/lib/db";

export async function POST(req, res) {
    await db.connect();

    try {
        const body = await req.json()
        const newRide = Ride.create(body);
        await newRide.save();
        const {...hostid} = newRide
        const host = await Host.findById(hostid);
        if (!host) {
            return res.status(404).json({ error: "Host not found" });
        }

        host.rides.push(newRide._id);
        await host.save();

        return new Response(JSON.stringify(newRide), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}