import { NavLink } from 'react-router-dom';
import styles from './AppNavBar.module.css';

export default function AppNavBar() {
  return (
    <>
      <nav className={styles.navBox}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
          end
          to="/"
        >
          <span className={styles.logo}>Panto</span>
        </NavLink>

        <ul className={styles.navList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              end
              to="/furniture"
            >
              Furniture
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              end
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              end
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              end
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
          end
          to="/cart"
        >
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
            <path
              d="M13.007 0.833252C16.8036 0.833252 19.9249 3.81662 20.0833 7.59688H20.0463C20.0508 7.70676 20.0296 7.81618 19.9846 7.91659H20.2058C21.9299 7.91659 23.7353 9.11156 24.4592 11.9963L24.5378 12.3367L25.6271 21.1125C26.411 26.7097 23.3487 29.0636 19.1713 29.1633L18.8912 29.1666H7.14708C2.90168 29.1666 -0.369729 27.6196 0.349565 21.4933L0.398615 21.1125L1.50041 12.3367C2.0437 9.2301 3.86761 8.00477 5.625 7.92121L5.81993 7.91659H5.93067C5.912 7.81083 5.912 7.70263 5.93067 7.59688C6.08911 3.81662 9.21041 0.833252 13.007 0.833252ZM8.88741 12.6331C8.19593 12.6331 7.63538 13.21 7.63538 13.9217C7.63538 14.6334 8.19593 15.2104 8.88741 15.2104C9.57889 15.2104 10.1394 14.6334 10.1394 13.9217L10.1297 13.7601C10.0524 13.1247 9.5257 12.6331 8.88741 12.6331ZM17.0882 12.6331C16.3968 12.6331 15.8362 13.21 15.8362 13.9217C15.8362 14.6334 16.3968 15.2104 17.0882 15.2104C17.7797 15.2104 18.3403 14.6334 18.3403 13.9217C18.3403 13.21 17.7797 12.6331 17.0882 12.6331ZM12.9515 2.6783C10.2257 2.6783 8.01594 4.88042 8.01594 7.59688C8.03462 7.70263 8.03462 7.81083 8.01594 7.91659H17.9487C17.9093 7.81451 17.8884 7.70625 17.887 7.59688C17.887 4.88042 15.6773 2.6783 12.9515 2.6783Z"
              class={styles.bagSvg}
            />
          </svg>
        </NavLink>
      </nav>
    </>
  );
}
