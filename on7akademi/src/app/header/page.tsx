import Link from "next/link";

function Header() {
    return (    <div>
        <header>
          <nav>
            <Link href="/">
              Ana Sayfa
            </Link>
            <Link href="/about">
              Hakkında
            </Link>
            <Link href="/contact">
              İletişim
            </Link>
            <button>Çıkış Yap</button>
          </nav>
        </header>
      </div>
    );
}

export default Header;