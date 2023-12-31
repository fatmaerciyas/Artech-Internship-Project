﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Abstract
{
    public interface IGenericRepository<T>
    {
        void Insert(T t);
        void Update(T t);
        void Delete(T t);
        Task<IEnumerable<T>> GetListAllAsync();
        Task<T> GetByIDAsync(int id);
        Task<T> GetAsync(Expression<Func<T, bool>> filter);
        Task<IEnumerable<T>> GetListAllAsync(Expression<Func<T, bool>> filter);
    }
}
