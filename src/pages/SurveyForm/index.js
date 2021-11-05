import React, {useState} from "react"
import ReactPageScroller from 'react-page-scroller';
import SurveyLayout from "./SurveyLayout";
import * as styles from "./index.module.css"
import "./index.css"
import { RadioButton } from "../../components/Custom/RadioButton/RadioButton";

const SurveyForm = surveyFormProps => {
    //state
    const [currentPage, setPage] = useState(0);
    const [q1, setSelected] = useState();
    const [q2, setSelected2] = useState();
    const [q3, setSelected3] = useState();
    const [q4, setSelected4] = useState();
    function handlePageChange(number) {
        if (number < 0)
            setPage(currentPage + number) 
        else if(number || number === 0)
            setPage(number)
        else 
            setPage(currentPage + 1)
    }
    
    const getPagesNumbers = () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
            <button key={i} eventKey={i - 1} onClick={() => handlePageChange(i-1)}>
                {i}
            </button>,
            );
        }
    
        return [...pageNumbers];
    };

    const pagesNumbers = getPagesNumbers();
    return (
        <div className={styles.surveyLayout}>
            {pagesNumbers}
            Current page: {currentPage + 1}
            <button onClick={() => handlePageChange(-1)}> Previous Page</button>
            <button onClick={() => handlePageChange()}> Next Page</button>
            <ReactPageScroller
                blockScrollDown
                blockScrollUp
                customPageNumber={currentPage}>
                <SurveyLayout>
                    <div className={styles.formNums}>01</div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyTitle}>
                            Số lượng chứng từ phát sinh trong 1 tháng *
                        </div>
                        <RadioButton value="first"
                            selected={q1}
                            imgSrc='/images/icon/icon-website.svg'
                            text="First Radio Button"
                            onChange={setSelected}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="second"
                            selected={q1}
                            imgSrc='/images/icon/icon-brand.svg'
                            text="Second Radio Button"
                            onChange={setSelected}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="thỉrd"
                            selected={q1}
                            imgSrc='/images/icon/icon-ecommerce.svg'
                            text="Third Radio Button"
                            onChange={setSelected}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="fourth"
                            selected={q1}
                            imgSrc='/images/icon/icon-chat.svg'
                            text="Fourth Radio Button"
                            onChange={setSelected}
                            onChoose={() => handlePageChange()} />
                    </div>
                </SurveyLayout>
                <SurveyLayout>
                    <div className={styles.formNums}>02</div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyTitle}>
                            Số lượng chứng từ phát sinh trong 1 tháng *
                        </div>
                        <RadioButton value="first"
                            selected={q2}
                            imgSrc='/images/icon/icon-website.svg'
                            text="First Radio Button"
                            onChange={setSelected2}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="second"
                            selected={q2}
                            imgSrc='/images/icon/icon-brand.svg'
                            text="Second Radio Button"
                            onChange={setSelected2}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="thỉrd"
                            selected={q2}
                            imgSrc='/images/icon/icon-ecommerce.svg'
                            text="Third Radio Button"
                            onChange={setSelected2}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="fourth"
                            selected={q2}
                            imgSrc='/images/icon/icon-chat.svg'
                            text="Fourth Radio Button"
                            onChange={setSelected2}
                            onChoose={() => handlePageChange()} />
                    </div>
                </SurveyLayout>
                <SurveyLayout>
                    <div className={styles.formNums}>03</div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyTitle}>
                            Quy mô nhân sự của công ty bạn là ...*
                        </div>
                        <RadioButton value="first"
                            selected={q3}
                            imgSrc='/images/icon/icon-website.svg'
                            text="First Radio Button"
                            onChange={setSelected3}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="second"
                            selected={q3}
                            imgSrc='/images/icon/icon-brand.svg'
                            text="Second Radio Button"
                            onChange={setSelected3}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="thỉrd"
                            selected={q3}
                            imgSrc='/images/icon/icon-ecommerce.svg'
                            text="Third Radio Button"
                            onChange={setSelected3}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="fourth"
                            selected={q3}
                            imgSrc='/images/icon/icon-chat.svg'
                            text="Fourth Radio Button"
                            onChange={setSelected3}
                            onChoose={() => handlePageChange()} />
                    </div>
                </SurveyLayout>
                <SurveyLayout>
                    <div className={styles.formNums}>04</div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyTitle}>
                            Doanh thu của công ty trên 1 tháng *
                        </div>
                        <RadioButton value="first"
                            selected={q4}
                            imgSrc='/images/icon/icon-website.svg'
                            text="First Radio Button"
                            onChange={setSelected4}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="second"
                            selected={q4}
                            imgSrc='/images/icon/icon-brand.svg'
                            text="Second Radio Button"
                            onChange={setSelected4}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="thỉrd"
                            selected={q4}
                            imgSrc='/images/icon/icon-ecommerce.svg'
                            text="Third Radio Button"
                            onChange={setSelected4}
                            onChoose={() => handlePageChange()} />
                        <RadioButton value="fourth"
                            selected={q4}
                            imgSrc='/images/icon/icon-chat.svg'
                            text="Fourth Radio Button"
                            onChange={setSelected4}
                            onChoose={() => handlePageChange()} />
                    </div>
                </SurveyLayout>
            </ReactPageScroller>
        </div>
    )
}

export default SurveyForm
