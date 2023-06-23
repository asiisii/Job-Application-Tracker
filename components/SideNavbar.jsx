import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SideNavbar = () => {
    return (
        <Link
          rel='noopener noreferrer'
          as='/'
          href='/'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 32 32'
            className='h-14 w-14 text-[#71C9CE]'
          >
            <path d='M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z'></path>
            <text
              x='50%'
              y='50%'
              textAnchor='middle'
              alignmentBaseline='middle'
              fontSize='10'
              fontWeight='bold'
            >
              JAT
            </text>
          </svg>
        </Link>
    )
}

export default SideNavbar