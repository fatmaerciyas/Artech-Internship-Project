using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.EntityFramework
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        public void Delete(T t)
        {
            using var c = new Context();
            c.Remove(t);
            c.SaveChanges();
        }

        public Task<T> GetAsync(System.Linq.Expressions.Expression<Func<T, bool>> filter)
        {
            using var c = new Context();
            return c.Set<T>().Where(filter).FirstOrDefaultAsync();
        }


        public async Task<T> GetByIDAsync(int id)
        {
            using var c = new Context();
            return await c.Set<T>().FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetListAllAsync()
        {
            using var c = new Context();
            return await c.Set<T>().ToListAsync();
        }

        public async Task<IEnumerable<T>> GetListAllAsync(Expression<Func<T, bool>> filter)
        {
            using var c = new Context();
            return await c.Set<T>().Where(filter).ToListAsync();
        }

        public void Insert(T t)
        {
            using var c = new Context();
            c.Add(t);
            c.SaveChanges();
        }

        public void Update(T t)
        {
            using var c = new Context();
            c.Update(t);
            c.SaveChanges();
        }
    }
}
