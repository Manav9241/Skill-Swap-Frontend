// import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState, useEffect } from 'react';


import { Link } from 'react-router-dom';

export default function Profile() {


	return (
		<div className='p-3 max-w-lg mx-auto'>
			<h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<input
					onChange={(e) => setFile(e.target.files[0])}
					type='file'
					ref={fileRef}
					hidden
					accept='image/*'
				/>

				<img
					onClick={() => fileRef.current.click()}
					src={formData.avatar || currentUser.avatar}
					alt='profile'
					className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
				/>

				<p className='text-sm self-center'>
					{fileUploadError ? (
						<span className='text-red-700'>
							Error Image Upload (image must be less than 2MB)
						</span>
					) : filePerc > 0 && filePerc < 100 ? (
						<span className='text-slate-700'>{`Uploading ${filePerc}%`} </span>
					) : filePerc === 100 ? (
						<span className='text-green-700'>Image successfully uploaded!</span>
					) : (
						''
					)}
				</p>

				<input
					type='text'
					placeholder='username'
					defaultValue={currentUser.username}
					id='username'
					className='border p-3 rounded-lg'
					onChange={handleChange}
				/>
				<input
					type='email'
					placeholder='email'
					defaultValue={currentUser.email}
					id='email'
					className='border p-3 rounded-lg'
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={handleChange}
					id='password'
					className='border p-3 rounded-lg'
				/>
				<button
					disabled={loading}
					className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
					{loading ? 'Loading...' : 'Update'}
				</button>

				<Link
					className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
					to={'/create-listing'}>
					Create Listing
				</Link>
			</form>

			<div className='flex justify-between mt-5'>
				<span
					onClick={handleDeleteUser}
					className='text-red-700 cursor-pointer'>
					Delete Account
				</span>

				<span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
					Sign Out
				</span>
			</div>

			<p className='text-red-700'>{error ? error : ''}</p>
			<p className='text-green-700'>
				{updateSuccess ? 'User is updated successfully!' : ''}
			</p>

			<button onClick={handleShowListings} className='text-green-700 w-full'>
				Show Listings
			</button>
			<p className='text-red-700 mt-5'>
				{showListingsError ? 'Error showing listings' : ''}
			</p>

			{userListings && userListings.length > 0 && (
				<div className='flex flex-col gap-4'>
					<h1 className='text-center mt-7 text-2xl font-semibold'>
						Your Listings
					</h1>
					{userListings.map((listing) => (
						<div
							key={listing._id}
							className='flex justify-between border rounded-lg p-3 items-center gap-4'>
							<Link to={`/listing/${listing._id}`}>
								<img
									src={listing.imageUrls[0]}
									alt='listing cover'
									className='h-16 w-16 object-contain'
								/>
							</Link>

							<Link className='text-slate-700 font-semibold hover:underline truncate flex-1'>
								<p>{listing.name}</p>
							</Link>

							<div className='flex flex-col items-center'>
								<button
									onClick={() => handleListingDelete(listing._id)}
									className='text-red-700 uppercase'>
									Delete
								</button>

								<Link to={`/update-listing/${listing._id}`}>
									<button className='text-green-700 uppercase'>Update</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}