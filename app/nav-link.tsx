'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'

export default function NavLink({ href, children}: any) {
    const pathname = usePathname();
    console.log('pathname', pathname)

    return <Link href={href}>{children}</Link>
}