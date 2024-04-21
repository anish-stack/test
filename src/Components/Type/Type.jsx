import React from 'react'
import { Link } from 'react-router-dom';

const Type = () => {
    const jobTypes = [
        {
            image: 'https://img.freepik.com/free-vector/woman-spending-time-living-room_1308-98724.jpg?t=st=1712741825~exp=1712745425~hmac=63aecb9c5dcb0f8d2f6c797c8e92b5b4f9a5e7d89fcc372db1558b5e245f4cf2&w=740',
            title: 'Work From Home',
            dep:"Sales"
        },
        {
            image: 'https://img.freepik.com/free-vector/home-delivery-worker-set_23-2148521846.jpg?t=st=1712741987~exp=1712745587~hmac=d022bc3aed1383d0634bf413c255452c3cb158e22ba89783105ab7d7258346e6&w=740',
            title: 'Delivery Jobs',
            dep:"Delivery"
        },
        {
            image: 'https://img.freepik.com/free-vector/illustration-social-media-concept_53876-37557.jpg?t=st=1712729372~exp=1712732972~hmac=b35617abe7c62b87e9c4f8ae17fc1daad850eefa762eafbbc6de9c2ca13e9cc3&w=1060',
            title: 'Tech Jobs',
            dep:"Software-Department"
        },
        {
            image: 'https://img.freepik.com/free-vector/happy-woman-cleaner-with-tools-cleaning-washing-flat-icon_1284-59988.jpg?t=st=1712729417~exp=1712733017~hmac=611f30342b8395ffc3246b2a9ab0b5dc44375f399603378f1ee3110714e3997a&w=740',
            title: 'Cleaning Jobs',
            dep:"Cleaning"

        },
        {
            image: 'https://img.freepik.com/free-vector/hand-drawn-receptionist-cartoon-illustration_23-2151046533.jpg?t=st=1712729477~exp=1712733077~hmac=c20d93635cfa1e520b8d0e1aae86c1c75b3e0a2edfedbaec7608f8e0cb870c53&w=740',
            title: 'Receptionist',
            dep:"Receptionist"
        },
        {
            image: 'https://img.freepik.com/free-vector/construction-worker-uniform_1308-99642.jpg?t=st=1712729522~exp=1712733122~hmac=8271139434b1236db424e941ee5f1cc93861eb658fe0c71e83906c0f89112b54&w=360',
            title: 'Labour',
            dep:"Labour"
        },
        {
            image: 'https://img.freepik.com/free-vector/flat-design-locksmith-character_23-2147728354.jpg?t=st=1712729555~exp=1712733155~hmac=651e8c06c31ac523b86333e4ec1381ea7df02e740ea5710c72bd0c78e4a7a105&w=740',
            title: 'Technician',
            dep:"Technician"
        },
        {
            image: 'https://img.freepik.com/free-vector/man-with-business-coins-chat-bubbles_24877-53502.jpg?t=st=1712729593~exp=1712733193~hmac=71f9bceb629e09bc685b2d92e621f9fd06abaafc00d919381b837fd3f6c05011&w=740',
            title: 'Non Tech Jobs',
            dep:"Non Tech"
        },
        {
            image: 'https://img.freepik.com/free-vector/scientist-boy-holding-empty-board-cartoon-character-sticker_1308-75212.jpg?t=st=1712729633~exp=1712733233~hmac=30c6a615343bc6a6aaf1b0f926dfe8527a29b2615f04372b7b727a4f7237d1db&w=360',
            title: 'Ward Boy',
            dep:"Ward Boy"
        },
        {
            image: 'https://img.freepik.com/free-vector/collection-big-set-isolated-various-occupations-profession-people-wearing-professional-uniform-flat-illustration_1150-37448.jpg?t=st=1712729671~exp=1712733271~hmac=c284dc753d07a24b833d2b284fcea96fded4df897c07c8e8fa8749d5cb14cbcb&w=740',
            title: 'Etc',
            dep:"All-Jobs"
        }
    ];
    
    return (
        <div className="max-w-7xl px-4 pt-20 relative z-40 mx-auto mt-12">
        <h2 className="text-center font-bold mb-9 text-pretty leading-none tracking-tighter md:text-5xl">In These Fields We <span className="text-[#EEFF41]">Provide Jobs</span></h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mx-auto xl:shadow-small-blue">
            {jobTypes.map((job, index) => (
                <Link to={`/Jobs/${job.dep}`} key={index} className="block w-full md:w-1/2 py-10 text-center border">
                    <div>
                        <img src={job.image} alt={job.title} className="block mx-auto h-32" />
                        <p className="pt-4 text-lg font-bold capitalize font-body text-[#ffd641] lg:text-lg md:text-base md:pt-6">{job.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    )
}

export default Type