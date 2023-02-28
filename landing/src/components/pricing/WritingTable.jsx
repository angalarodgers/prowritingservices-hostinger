import React from "react";

const WritingTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">8hrs</th>
            <th scope="col">24hrs</th>
            <th scope="col">2 - 4 Days</th>
            <th scope="col">5 - 7 Days</th>
            <th scope="col">8+ Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> High School</th>
            <td> $ 25</td>
            <td> $ 20</td>
            <td> $ 15</td>
            <td> $ 13</td>
            <td> $ 10</td>
          </tr>
          <tr>
            <th scope="row"> College</th>
            <td> $ 28</td>
            <td> $ 23</td>
            <td> $ 18</td>
            <td> $ 15</td>
            <td> $ 13</td>
          </tr>
          <tr>
            <th scope="row"> Undergraduate</th>
            <td> $ 30</td>
            <td> $ 25</td>
            <td> $ 20</td>
            <td> $ 18</td>
            <td> $ 15</td>
          </tr>
          <tr>
            <th scope="row"> Master</th>
            <td> $ 33</td>
            <td> $ 28</td>
            <td> $ 23</td>
            <td> $ 20</td>
            <td> $ 18</td>
          </tr>
          <tr>
            <th scope="row"> PhD</th>
            <td> $ 35</td>
            <td> $ 30</td>
            <td> $ 25</td>
            <td> $ 23</td>
            <td> $ 20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WritingTable;
