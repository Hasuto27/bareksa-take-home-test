import '../css/Calender.css';

function calender() {
    return (
        <table className="CalenderTable">
            <thead>
                <tr>
                    <th scope="col">S</th>
                    <th scope="col">M</th>
                    <th scope="col">T</th>
                    <th scope="col">W</th>
                    <th scope="col">T</th>
                    <th scope="col">F</th>
                    <th scope="col">S</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td scope="row">7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td scope="row">14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td className="bolded">18</td>
                    <td className="boldedLine">19</td>
                    <td className="boldedLine">20</td>
                </tr>
                <tr>
                    <td scope="row" className="boldedLine">21</td>
                    <td className="boldedLine">22</td>
                    <td className="boldedLine">23</td>
                    <td className="boldedLine">24</td>
                    <td className="boldedLine">25</td>
                    <td className="bolded">26</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td scope="row">28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        );
}

export default calender;