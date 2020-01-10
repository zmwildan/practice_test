// components
import React, { Component } from "react"
import UserCard from "../../components/cards/UserCard"
import Helmet from "../../components/Helmet"
import Styled from "styled-components"
// others
import { connect } from "react-redux"
import { fetchUsers } from "../../../store/users/actions"
import InputText from "../../components/forms/InputText"
import RepoCard from "../../components/cards/RepoCard"

const FormControl = Styled.div`
  display: flex;
  width: 400px;
  margin-bottom: 10px;

  label{
    width: 100px;
  }
`
// sample action static params
const Filter = "list"
const Query = {}

class Users extends Component {
  static fetchData(store, params, query) {
    return store.dispatch(fetchUsers(Filter, ""))
  }

  state = {
    search: ""
  }

  componentDidMount() {
    // check store before request
    if (!this.props.data[Filter]) this.props.dispatch(fetchUsers(Filter, ""))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.props.dispatch(fetchUsers(Filter, this.state.search))
    }
  }

  handleChangeInput = e => {
    const data = {}
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  render() {
    const users = this.props.data[Filter]
    return (
      <div>
        <Helmet title="Users" description="list of users" />
        <h1>Users</h1>
        <FormControl>
          <label>Search</label>
          <InputText
            name={"search"}
            value={this.state.search}
            onChange={this.handleChangeInput}
          />
        </FormControl>
        {users && users.status
          ? users.status == 200
            ? users.result.map((n, key) => <RepoCard key={key} {...n} />)
            : "no data found"
          : "loading..."}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { Users } = state
  return {
    data: Users.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
