import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBView, MDBCardBody, MDBDataTableV5 } from 'mdbreact';
import Movie from './Movie'
export default function Result(props) {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Title',
        field: 'Title',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'ID',
        field: 'imdbID',        
        width: 100,
      },
      {
        label: 'Year',
        field: 'Year',
        sort: 'asc',
        width: 200,
      }
    ],
    rows: [
      {props},      
    ],
  });
  const [checkbox1, setCheckbox1] = React.useState('');

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol md="12">
                <MDBCard className="my-5">
                    <MDBView className="gradient-card-header elegant-color">
                        <h4 className="h4-responsive text-white text-center py-3">Your Search</h4>
                    </MDBView>
                    <MDBCardBody>
                        <MDBDataTableV5
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={datatable}
                            checkbox
                            headCheckboxID='uniq1'
                            bodyCheckboxID='uniq12'
                            getValueCheckBox={(e) => {
                            showLogs2(e);
                            }}
                            proCheckboxes
                            filledCheckboxes
                            proSelect
                        />

                        <Movie> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Movie>
                        </MDBCardBody>
                </MDBCard>
            </MDBCol>
          </MDBRow>         
    </MDBContainer>
  );
}