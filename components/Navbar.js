import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <Link href="/">
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                    </li>
                </Link>
                <Link href="/1">
                    <li>Link1</li>
                </Link>
                <Link href="/2">
                    <li>Link2</li>
                </Link>
            </ul>
            <style jsx>{`
                nav {
                    width: 100%;
                    height: 4rem;
                    background-color: var(--dark-blue);
                    color: #ffffff;
                }
                ul {
                    display: flex;
                    margin: 0;
                    padding: 0;
                }
                li {
                    list-style: none;
                    height: 4rem;
                    line-height: 4rem;
                    padding: 0 10px;
                    margin: 0 10px;
                    cursor: pointer;
                }
            `}</style>
        </nav>
    )
}

export default Navbar;