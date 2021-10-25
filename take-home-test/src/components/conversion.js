import '../css/Chart.css';
import tomboltitik from '../tomboltitik.png';
import testChart from './chartTest.js';

function conversion() {
	return (
		<div className="conversionChart">
			<div className="chartsHeader">
				<div className="chartsHeaderKiri"><h3>Conversion</h3></div>
				<div className="chartsHeaderKanan"><img className="right" src={tomboltitik} /></div>
			</div>
			<div className="chartsBody">
				{testChart()}
			</div>
			<div className="chartsFooter">
				<div className="chartsDetail">
					<div className="detailColor detail1"></div>
					<p>Item#1</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail2"></div>
					<p>Item#2</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail3"></div>
					<p>Item#3</p>
				</div>
				<div className="chartsDetail">
					<div className="detailColor detail4"></div>
					<p>Item#4</p>
				</div>
			</div>
		</div>
	);
}
export default conversion;