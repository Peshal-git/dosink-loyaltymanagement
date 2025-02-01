import { SocialMedia } from './SocialMedia'

export const CopyrightFooter = () => {
  return <>
    <div className="flex px-4 py-6 bg-gray-100 flex-col md:items-center md:flex-row md:justify-between">
        <span className="text-sm text-gray-700 block sm:text-center">© 2023 <a href="https://dosink.com/">DosInk Marketing Tech. Co., Ltd. </a> All Rights Reserved.
        </span>

        <SocialMedia />
    </div>

  </>
}