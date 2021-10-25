import '../css/Chart.css';
import tomboltitik from '../tomboltitik.png';
import testChart from './chartTest.js';

function users() {
	return (
		<div className="conversionChart">
			<div className="chartsHeader">
				<div className="chartsHeaderKiri"><h3>Users</h3></div>
				<div className="chartsHeaderKanan"><img className="right" src={tomboltitik} /></div>
			</div>
			<div className="chartsBody">
				{ testChart()}
			</div>
			<div className="chartsFooter">
				<div className="chartsDetail">
					<div className="detailColor detail1"></div>
					<p>Risk Averse</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail2"></div>
					<p>Moderate</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail3"></div>
					<p>Risk Taker</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail4"></div>
					<p>Conservative</p>
				</div>
			</div>
		</div>
	);
}
export default users;