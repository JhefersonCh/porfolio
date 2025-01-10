import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import '../../assets/index.css';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const sidebarTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
};

interface NavItem {
  label: string;
  anchor: string;
  newPage?: boolean;
}

export const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navs: NavItem[] = [
    { label: 'inicio', anchor: '#top' },
    { label: 'proyectos', anchor: '#projects' },
    { label: 'experiencia', anchor: '#experience' },
    { label: 'sobre mí', anchor: '#about' },
    { label: 'contacto', anchor: 'mailto:juan.sanchez.dev@gmail.com' },
    { label: 'CV', anchor: './CV_JhefersonCheca.pdf', newPage: true },
  ];
  const [selectedItem, setSelectedItem] = useState('#top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionId = sectionElement.getAttribute('id');
        if (sectionId) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setSelectedItem(`#${sectionId}`);
          }
        }
      });

      const topSection = document.querySelector('.top') as HTMLElement;

      if (topSection && !window.scrollY) {
        setSelectedItem('#top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedItem = (item: NavItem) => {
    if (item.newPage) {
      window.open(item.anchor, '_blank');
    } else {
      window.location.href = item.anchor;
    }
  };

  return (
    <article className="h-full w-0 fixed z-50">
      <section className="relative h-full bleck lg:hidden">
        <button
          onClick={handleSidebarToggle}
          className={`fixed top-4 left-4 z-40 p-2 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>

        <motion.nav
          className="fixed h-full left-0 w-64 bg-gray-900 z-30 p-6 flex flex-col overflow-y-auto lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
          transition={sidebarTransition}
        >
          <button
            className="self-end mb-6 text-2xl lg:hidden absolute text-white hover:text-gray-300 transition-colors"
            onClick={handleSidebarToggle}
          >
            <span className="sr-only">Cerrar menú</span>X
          </button>

          <ul className="space-y-4 my-auto flex flex-col items-center gap-4">
            {navs.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className={`w-full justify-start text-lg  hover:text-gray-300 hover:scale-110 transition-colors ${
                    selectedItem === item.anchor
                      ? 'text-blue-500 scale-110'
                      : 'text-white'
                  }`}
                  onClick={() => {
                    handleSelectedItem(item);
                    handleSidebarToggle();
                  }}
                >
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </section>

      <section className="hidden lg:flex h-full w-64 items-center">
        <motion.nav
          className="w-64 p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ul className="space-y-2 flex flex-col items-center p-4 gap-1">
            {navs.map((item) => (
              <li
                key={item.label}
                className={`w-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 rounded-lg border ${
                  selectedItem === item.anchor ? 'scale-110 bg-gray-800' : ''
                }`}
              >
                <button
                  type="button"
                  className={`w-full justify-start text-xl py-2 transition-colors 
                    ${selectedItem === item.anchor ? 'text-white' : 'text-color'}`}
                  onClick={() => handleSelectedItem(item)}
                >
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </section>
    </article>
  );
};

export default Side;
