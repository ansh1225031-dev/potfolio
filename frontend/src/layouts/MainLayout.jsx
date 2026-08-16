import Navbar from '../components/Navbar';

import CosmicBackground from '../components/CosmicBackground';
import CursorGlow from '../components/CursorGlow';

export default function MainLayout({ children, theme, toggleTheme }) {
  return (
    <>
      <CosmicBackground theme={theme} />
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>

    </>
  );
}
