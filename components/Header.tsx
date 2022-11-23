import Cart from '../islands/Cart.tsx';

export function Header() {
  return (
    <header
      class='h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative'
      style={{
        backgroundImage: 'url(/header_bg.svg)',
      }}
    >
      <div class='rainfall w-full h-full absolute' />
      <nav class='w-11/12 h-24 max-w-5xl flex flex-row-reverse items-center  relative'>
        <Cart />
      </nav>
    </header>
  );
}
