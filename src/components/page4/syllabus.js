import React  from 'react'
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import '../page4/syllabus.css';


const Syllabus =() => {

    // const[selectSem, setSelectSem] = useState(null);

    const handleDownload = (syllabus) =>{
         const syllabusFilePath =  process.env.PUBLIC_URL +  `/syllabus/${syllabus}.pdf`;

         const link = document.createElement('a');
         link.href = syllabusFilePath;
         link.download = `syllabus${syllabus}.pdf`;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
    }
  return (
    <div>
        <Header/>


         <h2 className='head'> Download Syllabus</h2>
         
         <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Semester 1st
        </div>

        <div class="ag-courses-item_date-box">
         
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("1stsem")} >Download</button>

          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
            Semester 2nd
         </div>

        <div class="ag-courses-item_date-box">
        
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("2ndsem")} >Download</button>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
       Semester 3rd
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("3rdsem")} >Download</button>

          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Semester 4th
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("4thsem")} >Download</button>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Semester 5th
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("5thsem")} >Download</button>

          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Semester 6th
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("6thsem")} >Download</button>

          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Semester 7th
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("4thyrsyllabus")} >Download</button>

          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Semester 8th
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
          <button onClick={() => handleDownload("4thyrsyllabus")} >Download</button>

          </span>
        </div>
      </a>
    </div> 
    
   

    

  </div>
</div>
      <Footer/>
    </div>
  )
}

export default Syllabus
