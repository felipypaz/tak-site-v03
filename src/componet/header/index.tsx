import Link from 'next/link';


export default function Header() {
    return (
      <main >
        <div>
         <p>hello word header </p>
        </div>
        <div>
      <Link href="/about">
        <button>Ir para Página  about</button>
      </Link>
      <Link href="/contact">
        <button>Ir para Página contact</button>
      </Link>
     
    </div>
      </main>
    )
  }
  