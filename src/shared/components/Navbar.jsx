export default function Navbar() {
  return (
    <nav
      className='
        bg-white
        w-full
        px-6
        h-[56px]
        md:h-[65px]
        flex
        justify-between
        items-center
    '
    >
      <img
        src='img/simplestate.svg'
        alt='SimpleState'
        className='
        w-28
        md:w-[200px]
      '
      />
    </nav>
  );
}
