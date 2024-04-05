import { useLocation } from 'react-router-dom';
// import TopNav from '../components/TopNav';
import { stringify } from 'viem';

function AboutView()
{
    var location = useLocation();


    return <div><h1>AboutView</h1>
        {/* <TopNav /> */}

        {stringify(location)}

        {/*换行 */}
        <br />

        {stringify(window.location.href)}
    
    </div>
}

export default AboutView;