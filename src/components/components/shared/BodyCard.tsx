// import { IType } from '@/type/type';
// import Image from 'next/image';
// import React from 'react';

// interface ICardjim {
//     workout: IType;
// }

// const BodyCard = ({ workout }: ICardjim) => {
//     return (
//         <div className="w-full max-w-[520px] overflow-hidden rounded-[22px] border border-gray-800 bg-[#15171c] shadow-lg">

//             {/* Image */}
//             <div className="h-[255px] w-full overflow-hidden">
//                 <Image
//                     src={workout.image}
//                     alt={workout.name}
//                     height={480}
//                     width={530}
//                     className="object-cover"
//                 />
//             </div>

//             {/* Card Content */}
//             <div className="p-6">

//                 {/* Muscle Groups */}
//                 {workout.muscleGroups?.length > 0 && (
//                     <div className="mb-4 flex flex-wrap gap-2">
//                         {workout.muscleGroups.map((muscle: string) => (
//                             <span
//                                 key={muscle}
//                                 className="rounded-full bg-[#C2F800] px-3 py-1 text-sm text-[#000000] font-bold"
//                             >
//                                 {muscle}
//                             </span>
//                         ))}
//                     </div>
//                 )}

//                 {/* Title */}
//                 <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white">
//                     {workout.name}
//                 </h2>

//                 {/* Type */}
//                 <p className="mt-2 text-base text-gray-400">
//                     {workout.equipment}
//                 </p>

//                 {/* Divider */}
//                 <div className="my-6 h-px bg-gray-800"></div>

//                 {/* Stats */}
//                 <div className="flex items-center gap-7 text-gray-400">

//                     <div className="flex items-center gap-2">
//                         <span className="text-xl">◷</span>
//                         <span>{workout.duration} min</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-xl">🔥</span>
//                         <span>{workout.caloriesBurned}</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-xl">☆</span>
//                         <span>{workout.rating}</span>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BodyCard;