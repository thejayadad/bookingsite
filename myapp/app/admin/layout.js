import AdminNavbar from "@/components/AdminNavbar";

export default function DashboardLayout({ children }) {
    return <section>
        <section className="max-w-screen-lg	mx-auto mt-8 px-4">
            <AdminNavbar />
        {children}

        </section>
        </section>
  }