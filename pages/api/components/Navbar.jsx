import Link from "next/link";

const Navbar = () => {
    return ( 
    <>
    <nav className="nav">
        <h2>
            <Link href='/'>My Blog</Link>
        </h2>
        <div>
            <a 
            href='https://sanwo-mueez.netlify.app'
            target='_blank'
            rel='noreferrer'
            >
                My portfolio
            </a>
        </div>
    </nav>

    <style jsx>
        {`
          .nav{
            background: #181818;
            color: white;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px ;
          }
        `}
    </style>
    </> 
    );
}
 
export default Navbar;