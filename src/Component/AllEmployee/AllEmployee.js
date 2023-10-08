import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const AllEmployee = () => {

    const [AllEmployee, setAllEmployee] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./employee.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAllEmployee(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(AllEmployee)

    return (
        <div>
            <Navbar></Navbar>


            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">All Employee</h1>
                    </div>
                    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-blue-100 rounded-tl rounded-bl">Serial</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-blue-100">Name</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-blue-100">Position</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-blue-100">Contact</th>
                                    <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-blue-100 rounded-tr rounded-br"> Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllEmployee.map((employee) => (
                                    <tr key={employee.id}>
                                        <td className="px-4 py-3">{employee.name}</td>
                                        <td className="px-4 py-3">{employee.position}</td>
                                        <td className="px-4 py-3">{employee.contact.email}</td>
                                        <td className="px-4 py-3">{employee.contact.phone}</td>
                                        <Link to="/employeeDetails" className="m-4 text-lg  flex ml-auto text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded"> Details  </Link>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AllEmployee;