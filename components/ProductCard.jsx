import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ data }) => {
	const { name, price, slug, original_price, thumbnail } = data?.attributes || {};

	const per = original_price / 100;
	const c = original_price - price;

	return (
		<Link
			href={`/product/${slug}`}
			className='transform overflow-hidden bg-white duration-300 hover:scale-105 cursor-pointer'
		>
			<Image
				width={500}
				height={500}
				src={thumbnail?.data?.attributes?.url}
				alt='product image'
				className='w-full'
			/>
			<div className='p-4 text-black/[0.9]'>
				<h2 className='text-lg font-medium'>{name}</h2>
				<div className='flex items-center text-black/[0.5]'>
					<p className='mr-2 text-lg font-semibold'>&#2547;{price}</p>
					{original_price > price && (
						<>
							<p className='text-base font-medium line-through'>
								&#2547;{original_price}
							</p>
							<p className='ml-auto text-base font-medium text-green-500'>
								{(c / per).toFixed(2)}% off
							</p>
						</>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
