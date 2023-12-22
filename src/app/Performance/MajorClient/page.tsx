import Image from 'next/image';
import Enterprise from '/public/image/시공사진/Enterprise.jpg';

export default function MajorClient(){
    return(
        <div className='Performance-page Performance-page-1'>
            <Image
            src={Enterprise}
            alt='거래처'
            />
        </div>
    );
}