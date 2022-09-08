import {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTheme} from 'next-themes'
import {
  Dark,
  Light,
  ArrowRight,
  GitHub,
  MobileMenuOpen,
  MobileMenuClose,
} from '../lib/icons'

export default function Header({...restProps}) {
  const router = useRouter()

  const [isOpened, setIsOpened] = useState(false)

  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpened(!isOpened)
    document.body.classList.toggle('overflow-hidden')
  }

  const switchRoutes = () => {
    setIsOpened(false)
    document.body.classList.remove('overflow-hidden')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button role="button" onClick={() => setTheme('light')}>
          <Light className="w-6 h-6 cursor-pointer" />
        </button>
      )
    } else {
      return (
        <button role="button" onClick={() => setTheme('dark')}>
          <Dark className="w-6 h-6 cursor-pointer" />
        </button>
      )
    }
  }

  return (
    <>
      <header
        className="bg-semi-white dark:bg-dark-500 text-dark-500 dark:text-semi-white text-base font-heading shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] dark:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-[20px] lg:py-[26px] relative shrink-0 z-50"
        {...restProps}
      >
        <div className="px-4 lg:px-8 xl:px-16 flex items-center gap-4 lg:gap-16 xxl:gap-[268px]">
          <Link href="/">
            <a className="block w-[130px] md:w-[200px] shrink-0">
              <svg
                width="100%"
                viewBox="0 0 200 44"
                className="fill-dark-500 dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2423_136905)">
                  <path d="M55.5777 17.8112C54.7653 17.4004 53.7282 17.1921 52.4914 17.1921H45.9617V32.6357H48.9173V26.7128H52.4914C53.757 26.7128 54.8114 26.493 55.6238 26.0593C56.3883 25.6743 57.0192 25.07 57.4348 24.3245C57.8198 23.5815 58.0188 22.7569 58.0148 21.921C58.0108 21.085 57.8039 20.2624 57.4117 19.5231C56.9902 18.7797 56.3502 18.1824 55.5777 17.8112ZM54.385 23.673C53.9702 24.0857 53.273 24.2958 52.3166 24.2958H48.9173V19.6091H52.3166C53.2769 19.6091 53.9683 19.8173 54.385 20.2319C54.8018 20.6465 55.013 21.2293 55.013 21.963C55.013 22.6966 54.8018 23.2584 54.385 23.673Z" />
                  <path d="M63.7148 22.0222C63.0894 22.4001 62.5629 22.92 62.1784 23.5392L61.9325 21.6515H59.2976V32.6357H62.2533V27.6241C62.2533 26.8102 62.3877 26.1682 62.6508 25.7135C62.8936 25.2786 63.2805 24.941 63.7455 24.7582C64.2635 24.5653 64.8133 24.4707 65.3664 24.4793H66.2306V21.384H66.1577C65.2995 21.3663 64.4535 21.5873 63.7148 22.0222Z" />
                  <path d="M76.4996 21.6514L73.3634 29.162L70.3751 21.6972L70.3559 21.6514H67.1448L71.4448 31.9152H72.0421L69.5147 37.4446H72.6605L79.6454 21.6514H76.4996Z" />
                  <path d="M87.2736 26.4967C86.636 26.2846 85.9293 26.0897 85.1611 25.9235C84.5862 25.8028 84.0242 25.6282 83.4825 25.4019C83.0831 25.2242 82.8872 24.9949 82.8872 24.7026C82.8884 24.5608 82.9257 24.4216 82.9956 24.298C83.0654 24.1744 83.1655 24.0704 83.2866 23.9957C83.6396 23.7804 84.0506 23.6784 84.4639 23.7033C85.4875 23.7033 86.0618 24.0855 86.2173 24.8497L86.2289 24.907H89.029L89.0174 24.8268C88.9638 24.3356 88.8123 23.86 88.572 23.4276C88.3316 22.9953 88.0071 22.6149 87.6174 22.3086C86.8377 21.7048 85.7852 21.3972 84.485 21.3972C83.0831 21.3972 81.9768 21.7354 81.1971 22.3984C80.8255 22.6974 80.5266 23.0761 80.3227 23.5062C80.1189 23.9363 80.0153 24.4067 80.0198 24.8822C80.003 25.3649 80.1373 25.8409 80.404 26.2445C80.6644 26.6152 81.0066 26.9217 81.4045 27.1405C81.8308 27.3764 82.2816 27.5654 82.7489 27.7042C83.2348 27.8513 83.7092 27.9774 84.1816 28.0863C84.7616 28.2041 85.3312 28.3676 85.8851 28.5754C86.0656 28.6392 86.22 28.7605 86.3241 28.9204C86.4283 29.0804 86.4765 29.2701 86.4612 29.46C86.4582 29.6147 86.4204 29.7667 86.3506 29.9049C86.2809 30.0431 86.1808 30.164 86.0579 30.2587C85.7871 30.4937 85.3473 30.6121 84.7539 30.6121C84.2315 30.6354 83.7166 30.4826 83.2924 30.1784C82.9427 29.9277 82.698 29.5577 82.6049 29.139L82.5933 29.0817H79.6223L79.6319 29.162C79.7112 29.8776 79.9906 30.5568 80.4385 31.1223C80.9129 31.7052 81.5271 32.1599 82.2246 32.4444C83.0418 32.7751 83.918 32.9369 84.8 32.9202C85.647 32.939 86.4885 32.7801 87.2698 32.454C87.9189 32.1829 88.4776 31.7344 88.8811 31.1605C89.2532 30.6149 89.4421 29.9661 89.4207 29.3072C89.4207 28.52 89.2287 27.9048 88.8311 27.4768C88.4057 27.0219 87.8691 26.6842 87.2736 26.4967Z" />
                  <path d="M104.795 21.3878C104.022 21.3814 103.261 21.5645 102.576 21.9209C101.957 22.2399 101.424 22.7025 101.023 23.2698C100.301 22.0221 99.1023 21.3878 97.4353 21.3878C96.7245 21.3718 96.0211 21.5341 95.3899 21.8597C94.8716 22.1362 94.4216 22.5239 94.0724 22.9946L93.9956 22.5361C93.9546 22.2868 93.8258 22.0603 93.6323 21.8968C93.4388 21.7333 93.1932 21.6437 92.9393 21.6438H91.2358V32.6356H94.1934V26.9687C94.1934 26 94.42 25.2358 94.8694 24.697C95.0804 24.4374 95.3487 24.2298 95.6535 24.0903C95.9583 23.9507 96.2913 23.8831 96.6267 23.8926C97.3604 23.8926 97.9096 24.1334 98.2592 24.6072C98.6087 25.081 98.795 25.7937 98.795 26.7089V32.6318H101.751V26.9687C101.751 26 101.979 25.2358 102.427 24.697C102.642 24.4361 102.914 24.2278 103.223 24.0883C103.531 23.9488 103.868 23.8819 104.207 23.8926C104.925 23.8926 105.463 24.1334 105.807 24.6053C106.151 25.0772 106.331 25.7937 106.331 26.707V32.6299H109.289V26.4452C109.289 24.804 108.905 23.5372 108.127 22.6832C107.349 21.8291 106.231 21.3878 104.795 21.3878Z" />
                  <path d="M120.103 22.5648C119.198 21.7853 117.948 21.3879 116.385 21.3879C115.532 21.3756 114.686 21.5361 113.898 21.8598C113.186 22.1565 112.561 22.6262 112.079 23.2259C111.605 23.831 111.321 24.5622 111.263 25.3276V25.404H114.144L114.155 25.3467C114.194 25.1124 114.283 24.8891 114.416 24.6915C114.548 24.4939 114.721 24.3265 114.923 24.2003C115.36 23.9326 115.866 23.7959 116.379 23.8067C116.936 23.7896 117.48 23.9697 117.915 24.3149C118.321 24.6493 118.526 25.1824 118.526 25.8988V26.0899H115.818C114.226 26.0899 113.014 26.4109 112.213 27.0452C111.827 27.3381 111.516 27.7176 111.305 28.1529C111.094 28.5882 110.989 29.0669 111 29.55C110.995 30.1387 111.15 30.7177 111.449 31.2256C111.776 31.7571 112.253 32.181 112.82 32.4446C113.555 32.7732 114.355 32.9295 115.16 32.9013C116.078 32.9013 116.84 32.7102 117.428 32.3281C117.943 31.9949 118.377 31.5518 118.699 31.0308L118.785 31.6039C118.829 31.8919 118.974 32.1548 119.196 32.3449C119.418 32.535 119.701 32.6395 119.993 32.6395H121.47V25.8969C121.467 24.4697 121.004 23.3482 120.103 22.5648ZM117.616 29.808C117.186 30.3124 116.571 30.5722 115.791 30.5722C115.356 30.5925 114.925 30.4747 114.56 30.2359C114.413 30.1319 114.293 29.9925 114.214 29.8305C114.135 29.6685 114.098 29.4892 114.107 29.3093C114.105 29.1282 114.146 28.9491 114.225 28.786C114.304 28.6229 114.42 28.4803 114.564 28.3693C114.871 28.1132 115.396 27.9871 116.122 27.9871H118.426C118.327 28.6558 118.046 29.285 117.616 29.808Z" />
                  <path d="M134.301 21.6514H131.346V32.6374H134.301V21.6514Z" />
                  <path d="M132.824 16.9455C132.343 16.9283 131.874 17.0952 131.513 17.4117C131.343 17.5623 131.209 17.7475 131.119 17.9546C131.029 18.1618 130.985 18.3859 130.99 18.6116C130.985 18.8384 131.029 19.0637 131.118 19.2725C131.207 19.4813 131.339 19.669 131.507 19.8229C131.874 20.1315 132.339 20.3008 132.819 20.3008C133.3 20.3008 133.765 20.1315 134.132 19.8229C134.3 19.6694 134.433 19.4819 134.523 19.273C134.612 19.0641 134.656 18.8386 134.651 18.6116C134.657 18.3859 134.614 18.1616 134.524 17.9541C134.434 17.7466 134.301 17.5609 134.132 17.4098C133.772 17.0949 133.304 16.9288 132.824 16.9455Z" />
                  <path d="M144.15 28.7379C144.028 29.2287 143.73 29.6578 143.31 29.9435C142.87 30.2331 142.352 30.3817 141.824 30.3696C141.461 30.3729 141.102 30.2985 140.77 30.1515C140.439 30.0045 140.143 29.7882 139.903 29.5175C139.375 28.9443 139.108 28.1514 139.108 27.1387C139.108 26.1261 139.375 25.3294 139.903 24.7619C140.33 24.3007 140.907 24.0055 141.532 23.9292C142.157 23.8529 142.789 24.0004 143.314 24.3454C143.729 24.6316 144.026 25.0559 144.154 25.5415L144.167 25.593H147.276L147.259 25.5071C147.04 24.3053 146.381 23.227 145.41 22.4806C144.449 21.7546 143.251 21.3839 141.849 21.3839C140.809 21.3637 139.781 21.6161 138.87 22.1157C138.015 22.5959 137.309 23.3004 136.829 24.1524C136.339 25.0729 136.083 26.0984 136.083 27.1397C136.083 28.181 136.339 29.2065 136.829 30.1269C137.305 30.9831 138.01 31.6923 138.864 32.177C139.776 32.6762 140.803 32.9285 141.843 32.9088C143.245 32.9088 144.444 32.5267 145.404 31.7777C146.361 31.0332 147.017 29.9714 147.253 28.7857L147.272 28.6997H144.161L144.15 28.7379Z" />
                  <path d="M156.426 17.1921H153.468V32.6357H163.236V30.3066H156.426V17.1921Z" />
                  <path d="M186.457 22.1423C185.62 21.6315 184.655 21.3666 183.674 21.3781C182.74 21.3781 181.97 21.5691 181.383 21.936C180.896 22.2359 180.461 22.6135 180.098 23.0537V17.1709H177.142V32.6355H178.811C179.087 32.6351 179.354 32.5397 179.567 32.3656C179.78 32.1914 179.926 31.9493 179.981 31.6802L180.071 31.2464C180.446 31.7453 180.934 32.1486 181.496 32.4234C182.178 32.7466 182.926 32.9069 183.681 32.8915C184.66 32.9061 185.624 32.6487 186.464 32.1482C187.281 31.6517 187.949 30.9481 188.402 30.1096C188.887 29.2015 189.132 28.1858 189.115 27.1577C189.131 26.1261 188.886 25.1069 188.402 24.1943C187.947 23.3516 187.276 22.6437 186.457 22.1423ZM185.247 29.4333C184.966 29.7196 184.628 29.945 184.255 30.0953C183.882 30.2455 183.482 30.3174 183.08 30.3064C182.675 30.3197 182.272 30.2478 181.896 30.0953C181.521 29.9429 181.182 29.7134 180.902 29.4218C180.355 28.7877 180.054 27.9794 180.054 27.1434C180.054 26.3074 180.355 25.4991 180.902 24.865C181.481 24.2959 182.263 23.9778 183.077 23.98C183.891 23.9821 184.671 24.3044 185.247 24.8764C185.534 25.1837 185.758 25.5444 185.905 25.9378C186.053 26.3312 186.12 26.7496 186.105 27.1692C186.12 27.5844 186.052 27.9985 185.905 28.3872C185.758 28.776 185.534 29.1316 185.247 29.4333Z" />
                  <path d="M199.41 27.4558C198.982 27.01 198.446 26.681 197.853 26.5005C197.213 26.2884 196.509 26.0935 195.74 25.9273C195.165 25.8073 194.603 25.6326 194.062 25.4057C193.66 25.228 193.467 24.9988 193.467 24.7064C193.468 24.5649 193.505 24.426 193.575 24.3025C193.644 24.1789 193.744 24.0748 193.864 23.9995C194.217 23.7845 194.628 23.6824 195.041 23.7072C196.067 23.7072 196.639 24.0893 196.795 24.8536L196.806 24.9109H199.606L199.595 24.8306C199.545 24.338 199.397 23.8603 199.159 23.4255C198.92 22.9908 198.597 22.6078 198.208 22.2991C197.44 21.6953 196.378 21.3877 195.078 21.3877C193.674 21.3877 192.568 21.7259 191.79 22.3889C191.418 22.6878 191.119 23.0665 190.915 23.4965C190.71 23.9266 190.607 24.397 190.611 24.8727C190.595 25.3553 190.729 25.831 190.995 26.2349C191.256 26.6057 191.599 26.9122 191.997 27.131C192.423 27.3679 192.874 27.557 193.342 27.6946C193.828 27.8418 194.302 27.9679 194.774 28.0768C195.355 28.1878 195.925 28.345 196.48 28.5468C196.66 28.6106 196.815 28.7318 196.919 28.8918C197.023 29.0517 197.071 29.2414 197.056 29.4314C197.053 29.5861 197.016 29.7383 196.946 29.8766C196.876 30.0149 196.776 30.1357 196.653 30.23C196.382 30.465 195.944 30.5835 195.349 30.5835C194.826 30.6062 194.312 30.4534 193.887 30.1498C193.538 29.8984 193.294 29.5288 193.2 29.1104L193.188 29.0531H190.215V29.1333C190.294 29.8488 190.572 30.528 191.02 31.0936C191.495 31.6757 192.109 32.1302 192.806 32.4158C193.624 32.7464 194.501 32.9083 195.383 32.8915C196.23 32.9104 197.07 32.7515 197.851 32.4253C198.501 32.1543 199.06 31.7059 199.464 31.1319C199.835 30.5859 200.024 29.9374 200.004 29.2786C200 28.499 199.8 27.8838 199.41 27.4558Z" />
                  <path d="M173.595 22.5646C172.692 21.7851 171.442 21.3876 169.879 21.3876C169.023 21.375 168.173 21.5369 167.382 21.8634C166.67 22.1601 166.045 22.6298 165.563 23.2295C165.089 23.8349 164.804 24.5659 164.745 25.3312V25.4076H167.626L167.637 25.3503C167.677 25.116 167.766 24.8927 167.898 24.6951C168.03 24.4975 168.203 24.3301 168.406 24.2039C168.843 23.9362 169.348 23.7995 169.861 23.8103C170.418 23.7925 170.963 23.9727 171.398 24.3185C171.805 24.6529 172.01 25.186 172.01 25.9024V26.0935H169.322C167.73 26.0935 166.518 26.4145 165.717 27.0488C165.331 27.3416 165.019 27.7212 164.808 28.1565C164.597 28.5918 164.493 29.0705 164.503 29.5536C164.498 30.1423 164.654 30.7213 164.953 31.2292C165.279 31.7602 165.755 32.184 166.322 32.4482C167.056 32.7764 167.856 32.9327 168.661 32.9049C169.579 32.9049 170.343 32.7138 170.931 32.3317C171.445 31.9996 171.88 31.5586 172.202 31.0401L172.289 31.6133C172.332 31.9012 172.478 32.1642 172.7 32.3542C172.921 32.5443 173.204 32.6488 173.497 32.6488H174.97V25.8967C174.97 24.4695 174.501 23.3479 173.595 22.5646ZM171.11 29.8077C170.68 30.3121 170.065 30.572 169.285 30.572C168.849 30.5922 168.418 30.4745 168.054 30.2357C167.906 30.1318 167.787 29.9924 167.707 29.8304C167.628 29.6685 167.59 29.4891 167.599 29.3091C167.597 29.1278 167.638 28.9485 167.717 28.7854C167.797 28.6223 167.914 28.4798 168.058 28.3691C168.365 28.113 168.89 27.9869 169.616 27.9869H171.92C171.82 28.6553 171.54 29.2843 171.11 29.8077Z" />
                  <path d="M128.267 30.1097C127.731 30.1097 127.351 30.016 127.14 29.8326C126.928 29.6492 126.823 29.3053 126.823 28.8047V24.1332H129.767V21.6494H126.823V18.4893H124.203V21.6513H121.357L122.961 24.1351H123.867V28.7856C123.867 30.2147 124.222 31.2255 124.925 31.791C125.628 32.3565 126.573 32.6355 127.725 32.6355H129.947L128.301 30.1097H128.267Z" />
                  <path
                    d="M18.51 0.571533L3.74316 26.0153H33.2768L18.51 0.571533Z"
                    fill="#AD8AFF"
                  />
                  <path
                    d="M18.51 43.4288L3.74316 26.0154H33.2768L18.51 43.4288Z"
                    fill="#825AFF"
                  />
                  <path
                    d="M3.74307 26.0154L0 32.3376L18.5099 43.4288L3.74307 26.0154Z"
                    fill="#584BFF"
                  />
                  <path
                    d="M33.2766 26.0154L37.0196 32.3376L18.5098 43.4288L33.2766 26.0154Z"
                    fill="#AD8AFF"
                  />
                  <path
                    opacity="0.39"
                    d="M8.34278 18.0901L3.74316 26.0153H12.9424L8.34278 18.0901Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </Link>

          <div className="flex gap-6 items-center lg:hidden ml-auto">
            <div className="flex">{renderThemeChanger()}</div>

            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-yellow-600 bg-yellow-500 w-8 h-8 text-dark-500"
            >
              {isOpened ? (
                <MobileMenuClose className="w-[32px] h-[32px]" />
              ) : (
                <MobileMenuOpen className="w-[32px] h-[32px]" />
              )}
            </button>
          </div>

          <div
            className={`${
              isOpened ? 'flex' : 'hidden'
            } grow flex-col items-start lg:flex lg:flex-row lg:items-center lg:justify-end absolute lg:static top-full bg-semi-white dark:bg-body-gradient lg:bg-transparent lg:dark:bg-none lg:dark:bg-transparent w-full lg:w-auto z-[50] left-0 p-[20px] lg:p-0 max-h-[calc(100vh_-_72px)] overflow-auto shadow-[0_4px_4px_0_rgba(0,0,0,0.05)_inset] dark:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)_inset] lg:shadow-none dark:lg:shadow-none`}
          >
            <nav className="flex flex-col lg:flex-row [&>*]:py-[12px] lg:[&>*]:py-0 gap-4 xl:gap-8 xxl:gap-[62px] w-full lg:w-auto [&>*]:transition [&>*]:flex lg:[&>*]:inline-flex [&>*]:justify-between [&>*]:items-center grow">
              <Link href="/">
                <a
                  onClick={switchRoutes}
                  className={`${
                    router.pathname === '/'
                      ? 'lg:border-b-dark-500 lg:dark:border-b-semi-white'
                      : 'lg:border-b-transparent'
                  } text-dark-500 dark:text-white dark:hover:text-white lg:border-b`}
                >
                  Prysm
                  <ArrowRight className="w-8 h-8 lg:hidden" />
                </a>
              </Link>
              <Link href="/about">
                <a
                  onClick={switchRoutes}
                  className={`${
                    router.pathname === '/about'
                      ? 'lg:border-b-dark-500 lg:dark:border-b-semi-white'
                      : 'lg:border-b-transparent'
                  } text-dark-500 dark:text-white dark:hover:text-white lg:border-b`}
                >
                  About Us
                  <ArrowRight className="w-8 h-8 lg:hidden" />
                </a>
              </Link>
              <Link href="/careers">
                <a
                  onClick={switchRoutes}
                  className={`${
                    router.pathname === '/careers'
                      ? 'lg:border-b-dark-500 lg:dark:border-b-semi-white'
                      : 'lg:border-b-transparent'
                  } text-dark-500 dark:text-white dark:hover:text-white lg:border-b`}
                >
                  Careers
                  <ArrowRight className="w-8 h-8 lg:hidden" />
                </a>
              </Link>
              <a
                className="text-dark-500 dark:text-white"
                target="_blank"
                href="https://github.com/"
                rel="noopener noreferrer"
                onClick={switchRoutes}
              >
                Docs
                <ArrowRight className="w-8 h-8 lg:hidden" />
              </a>
            </nav>

            <a
              target="_blank"
              href="https://github.com/"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border-2 border-purple-500 dark:border-yellow-500 rounded-[10px] text-purple-500 dark:text-yellow-500 transition py-[4px] px-[20px] hover:text-white hover:bg-purple-500 dark:hover:text-dark-500 dark:hover:bg-yellow-500 mx-auto lg:mx-0 font-heading mt-[20px] lg:mt-0 lg:ml-4"
            >
              <GitHub className="w-8 h-8" />
              Install Prysm
            </a>

            <div className="hidden lg:flex ml-8">{renderThemeChanger()}</div>
          </div>
        </div>
      </header>

      {isOpened && (
        <div
          className="fixed h-full w-full left-0 top-0 bg-dark-500/50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  )
}
