import db from "@/lib/db";
// import { verifyJwtToken } from "@/lib/jwt";
import Host from "@/models/Host";

export async function GET(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    try {
        const host = await Host.findById(id)

        return new Response(JSON.stringify(host), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}


export async function PUT(req, ctx) {
    await db.connect()

    const id = ctx.params.id
    // const accessToken = req.headers.get('authorization')
    // const token = accessToken.split(" ")[1]

    // const decodedToken = verifyJwtToken(token)

    // if (!accessToken || !decodedToken) {
    //     return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    // }

    try {
        const body = await req.json()
        const host = await Host.findById(id)

        // if (blog?.authorId?._id.toString() !== decodedToken._id.toString()) {
        //     return new Response(JSON.stringify({ msg: 'Only author can update his blog' }), { status: 403 })
        // }

        const updatedHost = await Host.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })

        return new Response(JSON.stringify(updatedHost), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function DELETE(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    // const accessToken = req.headers.get('authorization')
    // const token = accessToken.split(' ')[1]

    // const decodedToken = verifyJwtToken(token)

    // if (!accessToken || !decodedToken) {
    //     return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    // }

    try {
        const host = await Host.findById(id)
        // if (blog?.authorId?._id.toString() !== decodedToken._id.toString()) {
        //     return new Response(JSON.stringify({ msg: 'Only author can delete his blog' }), { status: 403 })
        // }

        await Host.findByIdAndDelete(id)

        return new Response(JSON.stringify({msg: 'Successfully deleted host'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
