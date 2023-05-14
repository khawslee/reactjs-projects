import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './form.css'

import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

export default function CovidStatsApp() {

  const [covidData, setCovidData] = useState([])
  const tabledata = covidData.map((data) => {
    return (
      <tr>
        <td>{data.Country}</td>
        <td>{data.TotalConfirmed}</td>
        <td>{data.TotalConfirmed - data.TotalRecovered}</td>
        <td>{data.TotalRecovered}</td>
        <td>{data.TotalDeaths}</td>
      </tr>
    )
  })


  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(res => {
      setCovidData(res.data.Countries)
    }).catch(err => {
      console.log(err)
    })

    $(document).ready(function () {
      $('#mytable').DataTable();
    })
  }, [covidData])

  return (
    <div>
      <h1>Covid Stats</h1>

      <div className="row justify-content-center">

        <div className="col-md-8">
          <table id='mytable' className='table table-dark'>
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {tabledata}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
