﻿using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class GenericManager<T> : IGenericService<T> where T : class
    {

        IGenericRepository<T> genericDal;

        public GenericManager(IGenericRepository<T> genericDal)
        {
            this.genericDal = genericDal;
        }

        public Task<T> GetAsync(Expression<Func<T, bool>> filter)
        {
            return genericDal.GetAsync(filter);
        }

        public Task<T> GetByIDAsync(int id)
        {
            return genericDal.GetByIDAsync(id);
        }


        public Task<IEnumerable<T>> GetListAsync()
        {
            return genericDal.GetListAllAsync();
        }



        public void TAdd(T t)
        {
            genericDal.Insert(t);
        }

        public void TDelete(T t)
        {
            genericDal.Delete(t);
        }

        public void TUpdate(T t)
        {
            genericDal.Update(t);
        }
    }
}
