import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from "axios";
import File_info from "./File_info";

export default function All() {
//     sortDescending = () => {
//     const { prices } = this.state;
//     prices.sort((a, b) => a - b).reverse()
//     this.setState({ prices })
//   }

  const [data, setData] = useState([])
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://api.github.com/search/repositories?q=stars:%3E1+language:all"
    })
    .then(res=>{
      setData(res.data.items);
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(data);

  const [data1, setData1] = useState([])
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://api.github.com/search/repositories?q=stars:%3E1+language:html"
    })
    .then(res=>{
      setData1(res.data.items)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(data1);

  const [data2, setData2] = useState([])
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://api.github.com/search/repositories?q=stars:%3E1+language:css"
    })
    .then(res=>{
      setData2(res.data.items)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(data2);


  const [data3, setData3] = useState([])
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://api.github.com/search/repositories?q=stars:%3E1+language:javascript"
    })
    .then(res=>{
      setData3(res.data.items)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(data3);



  function sortDes(array){
    let arrSort = arr.sort((a,s) => {
        s.stargazers_count - a.stargazers_count
    });
    setData(arrSort); 
  }
  return (
    <Tabs variant='soft-rounded'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>ALL</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>HTML</Tab>
    <Tab _selected={{ color: 'white', bg: 'yellow.300' }}>CSS</Tab>
    <Tab _selected={{ color: 'white', bg: 'red.500' }}>JavaScript</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <div>
       {data.map(items=> 
            <File_info key={items.id} {...items}/>
            )}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
       {data1.map(items=> 
            <File_info key={items.id} {...items}/>
            )}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
       {data2.map(items=> 
            <File_info key={items.id} {...items}/>
            )}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
       {data3.map(items=> 
            <File_info key={items.id} {...items}/>
            )}
    </div>
    </TabPanel>
  </TabPanels>
</Tabs>
  );
};
