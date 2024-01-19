'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		window.location.href = 'https://alpha.watchen.xyz';
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<div className='text-center space-y-2'>
				<h1 className='text-3xl font-bold'>
					Watchen, the NFT platform has been moved.
				</h1>
				<h2>
					If you won't be redirect to the new link automatically in a few
					seconds,{' '}
					<Link href='https://alpha.watchen.xyz' className='underline'>
						click here
					</Link>
				</h2>
			</div>
		</main>
	);
}
