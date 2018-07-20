import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);

    //this.handleUploadFile = this.handleUploadFile.bind(this);
    this.toggleLoanInfo = this.toggleLoanInfo.bind(this);
    this.toggleLoanResults = this.toggleLoanResults.bind(this);
    this.state = {
      collapseLoanInfo: false,
      collapseResults: false,
      fadeIn: true,
      timeout: 300,
      status: 'Closed',
      applications: [],
      profileId: this.props.match.params.id
    };
  }

  toggleLoanInfo() {
    this.setState(
      { collapseLoanInfo: !this.state.collapseLoanInfo,
        collapseResults: false
      });
  }

  toggleLoanResults() {
    this.setState(
      { collapseLoanInfo: false,
        collapseResults: !this.state.collapseResults
      });
  }

  componentDidMount(){
    const data = new FormData()
    console.log("Mount ",this.state.profileId)
    data.append('profileId', this.state.profileId)
    fetch('/api/applications/profile',{
        method: 'POST',
        body: data,
        })
      .then(res => res.json())
      .then(applications => this.setState({applications:applications}, () => console.log("Fetched ")));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6" style={{margin:'0 auto'}}>
            <Card>
              <CardHeader>
                <Button color="primary" onClick={this.toggleLoanInfo} style={{ marginBottom: '1rem' }}>Application info</Button>
              </CardHeader>
              <Collapse isOpen={this.state.collapseLoanInfo}>
                <CardBody>
                  <h4>Loan application info</h4>
                  <Table responsive>
                    <tbody>
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Name :</strong></td>
                            <td>{application.First_Name} {application.Last_Name}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Loan amount :</strong></td>
                            <td>${application.Loan_Amount}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Occupation :</strong></td>
                            <td>{application.Occupation}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Telephone number :</strong></td>
                            <td>{application.Telephone_Number}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Application type :</strong></td>
                            <td>{application.Application_Type}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Grade :</strong></td>
                            <td>{application.Loan_Grade}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Sub grade :</strong></td>
                            <td>{application.Loan_Sub_Grade}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Home ownership :</strong></td>
                            <td>{application.Home_Ownership}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Verification status :</strong></td>
                            <td>{application.Verification_Status}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Purpose :</strong></td>
                            <td>{application.Purpose}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Public record bankruptcies :</strong></td>
                            <td>{application.Public_Record_Bankruptcies}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Debt to income ratio :</strong></td>
                            <td>{application.Debt_to_Income_Ratio}%</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Number of open accounts :</strong></td>
                            <td>{application.Open_Account}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application) => (
                          <tr>
                            <td><strong>Revolving utilization :</strong></td>
                            <td>{application.Revolving_Utilization}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Annual income :</strong></td>
                            <td>${application.Annual_Income}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Total number of accounts :</strong></td>
                            <td>{application.Total_Accounts}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Employment length :</strong></td>
                            <td>{application.Employment_Length} years</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Account now delinquent :</strong></td>
                            <td>{application.Account_Now_Delinquent}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Delinquent amount :</strong></td>
                            <td>${application.Delinquent_Amount}</td>
                          </tr>
                        ))}
                        {this.state.applications.map((application,index) => (
                          <tr key={index}>
                            <td><strong>Delinquent 2 Years :</strong></td>
                            <td>{application.Delinquent_2_Years}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                  <Button color="primary" style={{ marginBottom: '1rem',margin:'0 auto' }}>Run prediction</Button>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader>
                <Button color="primary" onClick={this.toggleLoanResults} style={{ marginBottom: '1rem' }}>Results</Button>
              </CardHeader>
              <Collapse isOpen={this.state.collapseResults}>
                <CardBody>
                  <h4>Prediction results</h4>
                  <Table responsive>

                  </Table>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
