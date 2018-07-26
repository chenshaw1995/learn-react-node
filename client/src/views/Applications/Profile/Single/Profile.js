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
  Progress,
  Table,
} from 'reactstrap';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.setPredictionOutput = this.setPredictionOutput.bind(this);
    this.toggleLoanInfo = this.toggleLoanInfo.bind(this);
    this.toggleLoanResults = this.toggleLoanResults.bind(this);
    this.handleRunPrediction = this.handleRunPrediction.bind(this);
    this.state = {
      collapseLoanInfo: false,
      collapseResults: false,
      collapseNoPrediction: false,
      collapsePrediction: false,
      fadeIn: true,
      timeout: 300,
      status: 'Closed',
      applications: [],
      profileId: this.props.match.params.id,
      activeTab: '1',
      risk_score: '',
      result:null
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggleLoanInfo() {
    this.setState(
      { collapseLoanInfo: !this.state.collapseLoanInfo,
        collapseResults: false
      });
  }

  setPredictionOutput(result, risk_score) {
    this.setState(
      { result: result, risk_score: risk_score, collapseNoPrediction:false,collapsePrediction:true })
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
      .then((response) => {
      response.json().then((results) => {
        this.setState({applications:results,risk_score:results[0].Risk_Score})
        if(this.state.risk_score > 0){
          this.setState({collapseNoPrediction:false,collapsePrediction:true})
        }
        else{
          this.setState({collapseNoPrediction:true,collapsePrediction:false})
        }
      })
    })
    //  .then(applications => this.setState({applications:applications,risk_score:applications[0].Risk_Score}, () => console.log("Fetched ")));
  }

  handleRunPrediction(){
    const data = new FormData()
    console.log("App ",this.state.applications[0])
    data.append('application', JSON.stringify( this.state.applications[0]))
    fetch('/api/watson-studio/risk-prediction', {
        method: 'POST',
        body: data,
        }).then((response) => {
        response.json().then((body) => {
          console.log("Body ",body.result)
          this.setPredictionOutput(body.result, body.risk_score)
          //this.setState({ result: body.result })
          this.toggle('2')
        });
      });
    //window.location.href = '/#/applications/profile'
  }

  render() {
    return (
      <div className="animated fadeIn">
            <Card style={{width:'70%',margin:'0px auto'}}>
              <CardHeader>
              </CardHeader>
              <CardBody>
                <Row className="align-items-center">
                  <Col col="12" xl className="mb-3 mb-xl-0">
                    {this.state.applications.map((application) => (
                      <h3>{application.First_Name} {application.Last_Name} </h3>
                    ))}
                  </Col>
                  <Col col="2" xl className="mb-3 mb-xl-0">
                    {this.state.applications.map((application) => (
                      <Button color="primary" href={'/#/applications/update/'+application.Application_ID} style={{float:'right'}} size="lg">Edit this application</Button>
                    ))}
                  </Col>
                </Row>
                <p>You can review the application here and run the prediction button at the bottom</p>
                <Nav tabs>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                      Application Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                      Prediction results
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                      Comments
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Table responsive>
                      <tbody>
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Name </strong></td>
                              <td>{application.First_Name} {application.Last_Name}</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Loan amount </strong></td>
                              <td>${application.Loan_Amount}</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Interest rate :</strong></td>
                              <td>{application.Interest_Rate}%</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Term :</strong></td>
                              <td>{application.Term} months</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>FICO Score :</strong></td>
                              <td>{application.FICO_Score}</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Installment :</strong></td>
                              <td>${application.Installment} per month</td>
                            </tr>
                          ))}
                          {this.state.applications.map((application) => (
                            <tr>
                              <td><strong>Log Annual Income :</strong></td>
                              <td>{application.Log_Annual_Income}</td>
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
                    <div align="center">
                      <Button color="primary" onClick={this.handleRunPrediction} style={{ marginBottom: '1rem',margin:'0 auto',width: '50%' }}>Run prediction</Button>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <h4>Prediction results</h4><br/>
                    <Collapse isOpen={this.state.collapseNoPrediction}>
                      <Row>
                        <Col col="12" xl className="mb-3 mb-xl-0">
                          <p>You have not run the prediction yet. Use the button on the right</p>
                        </Col>
                        <Col col="2" xl className="mb-3 mb-xl-0">
                          <Button color="primary" onClick={this.handleRunPrediction} style={{ float:'right',marginBottom: '1rem',margin:'0 auto',width: '50%' }}>Run prediction</Button>
                        </Col>
                      </Row>
                    </Collapse>
                    <Collapse isOpen={this.state.collapsePrediction}>
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td><strong>Risk Prediction </strong></td>
                            <td><Progress animated color="success" value={this.state.risk_score} style={{'margin-bottom': '0rem !important'}} className="mb-3"><b>{this.state.risk_score}%</b></Progress></td>
                          </tr>
                          <tr>
                            <td><strong>ROI </strong></td>
                            <td align="center">$444</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Collapse>
                  </TabPane>
                  <TabPane tabId="3">
                    <Form id="comments" onSubmit={this.handleCommentsSubmit} method="post" encType="multipart/form-data" className="form-horizontal">
                      <CardBody>
                          <FormGroup row>
                            <Col md="4">
                              <Label htmlFor="file-input">Comments</Label>
                            </Col>
                            <Col xs="12" md="8">
                            <Input type="textarea" name="comments" id="comments" rows="9"
                                   placeholder="Write something..." />
                            </Col>
                          </FormGroup>
                      </CardBody>
                      <CardFooter>
                        <Row className="align-items-center">
                          <Col col="12" xl className="mb-3 mb-xl-0">
                            <Button type="submit" block color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                          </Col>
                          <Col col="12" xl className="mb-3 mb-xl-0">
                            <Button type="reset" block color="danger"><i className="fa fa-ban"></i> Reset</Button>
                          </Col>
                        </Row>
                      </CardFooter>
                    </Form>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
      </div>
    );
  }
}

export default Profile;
