"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface AuthLayoutprops {
    children : React.ReactNode;
}
const AuthLayout  = ({children} : AuthLayoutprops) => {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                   <Image src="/logo.svg" height={50} width={100} alt="Logo"/>
                   <Button variant="secondary">
                    Sign-up
                   </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4">
                {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout;

//This interface AuthLayoutprops is being used to define the shape of props that the AuthLayout component can accept. Let's break it down:

//1.children: This is a special prop in React that represents any content that will be nested inside this component

//2.React.ReactNode: This is a TypeScript type that can represent any content that React can render (like text, elements, components, etc.)

//This is a core concept in Next.js and React where layouts act as wrappers that can contain different page content while maintaining a consistent structure.