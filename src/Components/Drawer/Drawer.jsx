import './Drawer.css'



const Drawer = ({ isOpen, setDrawerOpen }) => {
    if (!isOpen) {
        return null;
    }

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 4.5L16.5 12L9 19.5" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    return (

        <div className='drawer-header'>

            <div className='drawer-container-user'>
                <div className='user-drawer'>
                    <div className='drawer-img-user'></div>
                    <p>Hello, Tina</p>
                    <button className='drawer-btn-arrow'>{arrow}</button>
                </div>

                <hr/>

                <div className='drawer-top-categoris'>
                    <p>Top categories</p>
                    <div className="text">
                        <p>Skincare</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>Apparels</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>Jwellery</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>Handbags</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>EyeWare</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>Fragrance</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>Watches</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text">
                        <p>About</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                </div>
                <hr/>
                <div className='drawer-ContactUs'>
                    <p>Contact Us</p>

                    <div className="text2">
                        <p>Help & Support </p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text2">
                        <p>Feedback & Suggestions </p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <div className="text2">
                        <p>Visit Websites </p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>
                </div>
            </div>

            <button onClick={() => { setDrawerOpen(false) }} className='drawer-btn' />

        </div>

    )
}

export default Drawer