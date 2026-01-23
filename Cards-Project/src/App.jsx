import React from 'react'
import Card from './components/card';

const App = () => {
  const jobOpenings = [
  {
    id: 1,
    companyName: "Google",
    companyLogo: "https://imgs.search.brave.com/4MBvClgfV5NmkmIofX1ubWajKvxAW1UEqTXj3cvUcMs/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/a2V5d2VvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9EaXNlbm8tc2lu/LXRpdHVsby05LnBu/Zw",
    posted: "2 days ago",
    position: "Senior UI/UX Designer",
    jobType: "Full-time",
    level: "Senior",
    salary: "$70/hr",
  },
  {
    id: 2,
    companyName: "Meta",
    companyLogo: "https://imgs.search.brave.com/GsUDmI-z5sqwFp_V4IZM5TBi5TvILR8IpdjvG0phWZw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1TeW1i/b2wtNzAweDM5NC5w/bmc",
    posted: "5 days ago",
    position: "Product Designer",
    jobType: "Full-time",
    level: "Mid-level",
    salary: "$65/hr",
  },
  {
    id: 3,
    companyName: "Amazon",
    companyLogo: "https://imgs.search.brave.com/IUSd4evm5QEEmWUlPx9rTefBlcpzf7HU-FtLCmTL8es/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn",
    posted: "1 day ago",
    position: "Junior UI Designer",
    jobType: "Full-time",
    level: "Junior",
    salary: "$42/hr",
  },
  {
    id: 4,
    companyName: "Netflix",
    companyLogo: "https://imgs.search.brave.com/IHWEyt_j3vun7hSCD0HZ5oUVN3clHHj0HTASS1vrKzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    posted: "3 days ago",
    position: "Senior Product Designer",
    jobType: "Full-time",
    level: "Senior",
    salary: "$75/hr",
  },
  {
    id: 5,
    companyName: "Microsoft",
    companyLogo: "https://imgs.search.brave.com/IKZMVRrC2hI_2ZqlCBk7ZT23MZ3tvQ7ZsSuQmSLFCoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvODMz/MjczLmpwZw",
    posted: "7 days ago",
    position: "UX Researcher",
    jobType: "Part-time",
    level: "Senior",
    salary: "$60/hr",
  },
  {
    id: 6,
    companyName: "Airbnb",
    companyLogo: "https://imgs.search.brave.com/Ybf4qO_WyZ5ghKUdF2bTbPL9AojsbISD6XE9DE1KC8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10aG9z/ZS1pY29ucy1mbGF0/LXRob3NlLWljb25z/LzEyMDAvZXh0ZXJu/YWwtQWlyQm5iLUxv/Z28tc29jaWFsLW1l/ZGlhLXRob3NlLWlj/b25zLWZsYXQtdGhv/c2UtaWNvbnMuanBn",
    posted: "4 days ago",
    position: "UI Designer",
    jobType: "Full-time",
    level: "Mid-level",
    salary: "$55/hr",
  },
  {
    id: 7,
    companyName: "Spotify",
    companyLogo: "https://imgs.search.brave.com/10Btd1sC80nQcc9DniedZM0bTLAqluuFws7rojkQfNA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRjb2xvcmNv/ZGUuY29tL2ltYWdl/cy9jb2xvci1wYWxl/dHRlL3Nwb3RpZnkt/bG9nby5wbmc",
    posted: "6 days ago",
    position: "UX Designer",
    jobType: "Full-time",
    level: "Junior",
    salary: "$45/hr",
  },
  {
    id: 8,
    companyName: "Adobe",
    companyLogo: "https://imgs.search.brave.com/Q0hfc946iRxX1rVFX7i31qMaPZ8yUgRxK69PGOjBi48/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NS9zbWFs/bC9hZG9iZS1sb2dv/LXN0YW5kYXJkLWlj/b24tYXBwLWxvZ28t/ZWRpdGFibGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wcmVt/aXVtLXNvY2lhbC1t/ZWRpYS1kZXNpZ24t/Zm9yLWRpZ2l0YWwt/ZG93bmxvYWQtZnJl/ZS1wbmcucG5n",
    posted: "2 days ago",
    position: "Design Intern",
    jobType: "Part-time",
    level: "Intern",
    salary: "$25/hr",
  },
  {
    id: 9,
    companyName: "Uber",
    companyLogo: "https://imgs.search.brave.com/ELAGyNAMJn6LfRhxcU2fUyE8xrHGB9ZW5LcxDJShYcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjUxNTYwL2NvbnZl/cnNpb25zLzEyMDB4/NjAwd2EtZGVza3Rv/cC5qcGc",
    posted: "8 days ago",
    position: "Senior Interaction Designer",
    jobType: "Full-time",
    level: "Senior",
    salary: "$68/hr",
  },
  {
    id: 10,
    companyName: "Stripe",
    companyLogo: "https://imgs.search.brave.com/OEp3NdOsjSOJJ97S0tGCVCZYoJf6sgnOGHlCCXvXQhQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvcy85/OS9zdHJpcGVfdGh1/bWIucG5n",
    posted: "1 week ago",
    position: "Product Design Intern",
    jobType: "Internship",
    level: "Intern",
    salary: "$30/hr",
  },
];

  return (
  <>
  <div className='parent' >
    {jobOpenings.map(function(job){return <Card companyName={job.companyName} companyLogo={job.companyLogo} posted={job.posted} position={job.position} jobType={job.jobType} level={job.level} salary={job.salary} />})}
  </div>
  </>
)}
export default App;
