import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageList from './PageList';
import CardCom from './CardCom';
import FilterDrawer from './FilterDrawer';
import { getAllCars } from '../services/carService';

// 🔹 Main Layout
export default function ExploreOwner() {
  const [carDetail, setCarDetail] = useState({});
  const [keyword, setKeyword] = useState({isSearch: false, search: ""});
  const [filter, setFilter] = useState({isFilter: false, values: {}});

  useEffect(() => {
    setKeyword({isSearch: false, search: ""});
    setFilter({isFilter: false, values: {}});
    getAllCars(0).then((response) => {
      setCarDetail(response);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const doSearch = (search) => {
      setKeyword({isSearch: true, search: search});
      setFilter({isFilter: false, values: {}});
      ref.current.updateState(1);
      getBySearch(search, 0).then((response) => {
        setCarDetail(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  
    const doFilter = (filters) => {
      setFilter({isFilter: true, values: filters});
      setKeyword({isSearch: false, search: ""});
      ref.current.updateState(1);
      getByFilter(filters, 0).then((response) => {
        setCarDetail(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  
    const changePage = (pageNumber) => {
      if (keyword.isSearch) {
        getBySearch(keyword.search, pageNumber).then((response) => {
          setCarDetail(response);
        }).catch((error) => {
          console.log(error);
        });
      }else if (filter.isFilter) {
        getByFilter(filter.values, pageNumber).then((response) => {
          setCarDetail(response);
        }).catch((error) => {
          console.log(error);
        });
      }else {
        getAllCars(pageNumber).then((response) => {
          setCarDetail(response);
        }).catch((error) => {
          console.log(error);
        });
      }
    }

  return (
    <>
      {/* Drawer */}
      <FilterDrawer onSearch={doSearch} onFilter={doFilter} />

      {/* Card Layout */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'flex-start',
          gap: 6,
          p: 7,
          bgcolor: '#f1f8e9',
          borderRadius: '16px',
          margin: '5px 5px 5px 5px',
        }}
      >
        
        {carDetail?.pageContent?.map((car) => (
          <CardCom key={car.modelId} car={car} url={"/OwnerReg"} />
        ))}
        
        <PageList pageCount={carDetail?.totalPages} onPageChange={changePage} ref={ref} />
      </Box>
    </>
  );
}
