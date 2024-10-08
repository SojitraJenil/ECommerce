import Loader from '../../common/Loader/index';
import { getOrder, getOrderDelete } from '../../API/api';
import { useEffect, useState } from 'react';
import useSnackbar from '../../hooks/useSnackbar';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { fetchOrder, IsDeleteOrder } from '../../reducers/orderSlice';

function TableOrder() {
  const dispatch = useDispatch<any>();
  const { showSnackbar } = useSnackbar();
  const order = useSelector((state: RootState) => state.order.order);
  const loading = useSelector((state: RootState) => state.inquiry.loading);

  console.log('order :>> ', order);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await dispatch(IsDeleteOrder(id)).then(() => {
        showSnackbar('Order deleted successfully!', 'success');
        dispatch(fetchOrder());
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Order" />
      <div className="">
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-center dark:bg-meta-4">
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Index
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    FName
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    LName
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    UserId
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    mobile No
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    voucher
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    address
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    company
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    country
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    pincode
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    email
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map((item: any, index: any) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {index + 1}
                        </h5>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.fname}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.lname}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.userId}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.phone}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.voucher}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.address}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.company}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.country}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.pinCode}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.email}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-red-400 px-3 rounded-md text-white "
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default TableOrder;
