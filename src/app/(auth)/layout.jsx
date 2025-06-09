import { redirect } from "next/navigation";

const AuthLayout = ({ children }) => {

    const session = 0;

    if (session) {
        return redirect("/");
    }

    return (
        <div className="dark relative bg-[#111510] text-white backdrop-blur-md overflow-hidden">
            <div className="w-96 h-96 absolute -top-10 -right-10 bg-primary/15 blur-[100px] rounded-full" />
            <div className="w-96 h-96 absolute -bottom-10 -left-10 bg-primary/15 blur-[100px] rounded-full" />
            {children}
        </div>
    )

}

export default AuthLayout