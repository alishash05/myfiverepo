//import logo from './logo.svg';
import './App.css';

function App() {
for (a = 1; a <= 10; a++) 
{
document.write(" <tr> ");
for (b = 1; b <= 20; b++) 
	{
	var c=a*b;
	document.write(" <td  style= padding:15px ; >  "  + c + " <br>   </td> ")
	}
}
}
export default App;
