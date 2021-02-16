import React from "react";
import {NavLink} from "react-router-dom";


let bitrix = () => {
    window.open('https://azproject.bitrix24.ru/crm/lead/kanban/?current_fieldset=SOCSERV');
}

let remOnline = () => {
    window.open('https://app.remonline.ru/login?_gl=1*1oka5db*_gcl_aw*R0NMLjE2MTE3OTUwNTkuQ2p3S0NBaUF1OFNBQmhBeEVpd0Fzb2RTWkxnRUdfWDlYTmdlc0RHei1ZQm1uTHRuUkpGS1g5M2ZwNXVvSHBVZVROY1BZRGREZmowZkFCb0MtYmtRQXZEX0J3RQ..&_ga=2.124984713.2039059593.1611795059-1241204457.1609350262&_gac=1.188842457.1611795059.CjwKCAiAu8SABhAxEiwAsodSZLgEG_X9XNgesDGz-YBmnLtnRJFKX93fp5uoHpUeTNcPYDdDfj0fABoC-bkQAvD_BwE');
}

let sync = () => {
    window.open('https://sync.azproject.ru/schedule');
}

let price = () => {
    window.open('https://docs.google.com/spreadsheets/d/13SeKLvvcWlK-00qlQ83mOIhQLhi3AOEuS83ywg8antA/edit#gid=1764313225');
}


let mango = () => {
    window.open('https://ccc.mango-office.ru/auth');
}

let telegram = () => {
    window.open('https://web.telegram.org/#/login');
}

let shop = () => {
    window.open('https://logika.shop/');
}

let kad = () => {
    window.open('https://spb.cargo-avto.ru/raschet-rasstoyaniya-ot-kad/');
}

let yooKassa = () => {
    window.open('https://yookassa.ru/yooid/signin/step/login?contextId=UACB_CAC_b9980c66-8e7c-4ba7-af2b-9cb057827cd6');
}

let google = () => {
    window.open('https://www.google.ru/');
}

let bus = () => {
    window.open('https://logika.shop/bitrix/admin/#authorize');
}

let vkontakte = () => {
    window.open('https://vk.com/ryadom812');
}

const Logika = () => {
    return (
        <div className='Desk'>

            <div onClick={ bitrix }>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bitrix24-logo-ru.svg/1280px-Bitrix24-logo-ru.svg.png'></img>
                <br/>
                B24</div>

            <div onClick={ shop }>
                <img src='https://logika.shop/upload/CMax/90c/logo%20color%201.png'></img>
                <br/>
                Интернет-магазин</div>

            <div onClick={ bus }>
                <img src='https://svgsilh.com/svg_v2/304843.svg'></img>
                <br/>
                БУС</div>

            <div onClick={ kad }>
                <img src='https://i.pinimg.com/originals/a0/55/2a/a0552a8a85878a0fdf74e88ff63b5b3d.png'></img>
                <br/>
                Расчет от КАД</div>

            <div onClick={ mango }>
                <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Mango_Office.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Mango_Office.svg.png'></img>
                <br/>
                ccc.Mango</div>

            <div onClick={ telegram }>
                <img src='https://web.telegram.org/img/logo_share.png'></img>
                <br/>
                Telegram Web</div>

            <div onClick={ remOnline }>
                <img  src='https://app.remonline.ru/static/dist/images/logo/remonline.svg'></img>
                <br/>
                RemOnline</div>

            <div  onClick={ price }>
                <img  src='https://ssl.gstatic.com/docs/common/product/spreadsheets_lockup2.png'></img>
                <br/>
                Прайс РЯДОМ</div>

            <div onClick={ sync }>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Feather-core-calendar.svg/1024px-Feather-core-calendar.svg.png"></img>
                <br/>
                График мастеров</div>

            <div onClick={ google }>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png'></img>
                <br/>
                Google</div>

            <div onClick={ yooKassa }>
                <img src='https://yookassa.ru/user-auth-center-front/static/icons/checkout-ru.svg'></img>
                <br/>
                Яндекс Касса </div>

            <div onClick={vkontakte}>
                <img src='https://pngimg.com/uploads/vkontakte/vkontakte_PNG25.png'></img>
                <br/>
                Группа VK</div>

        </div>

    );
}

export default Logika;