import { container } from 'tsyringe';

import { HealthCheckController } from '../controller/health';

import { CatalogRepository } from '../repository/catalog.repository';
import { CatalogRepositoryInterface } from '../../core/repository/catalog-repository.interface';
import { GetAllCatalogsService } from '../../core/usecase/catalog/get-all-catalogs.service';
import { GetAllCatalogsByMerchantService } from '../../core/usecase/catalog/get-all-by-merchant.service';
import { GetCatalogService } from '../../core/usecase/catalog/get-catalog.service';
import { CreateCatalogService } from '../../core/usecase/catalog/create-catalog.service';
import { UpdateCatalogService } from '../../core/usecase/catalog/update-catalog.service';
import { DeleteCatalogService } from '../../core/usecase/catalog/delete-catalog.service';
import { CatalogController } from '../controller/catalog';

import { MerchantRepository } from '../repository/merchant.repository';
import { MerchantRepositoryInterface } from '../../core/repository/merchant-repository.interface';
import { GetAllMerchantsService } from '../../core/usecase/merchant/get-all-merchants.service';
import { GetMerchantService } from '../../core/usecase/merchant/get-merchant.service';
import { CreateMerchantService } from '../../core/usecase/merchant/create-merchant.service';
import { DeleteMerchantService } from '../../core/usecase/merchant/delete-merchant.service';
import { UpdateMerchantService } from '../../core/usecase/merchant/update-merchant.service';
import { MerchantController } from '../controller/merchant';

import { CategoryRepository } from '../repository/category.repository';
import { CategoryRepositoryInterface } from '../../core/repository/category-repository.interface';
import { CreateCategoryService } from '../../core/usecase/category/create-category.service';
import { GetAllCategoriesService } from '../../core/usecase/category/get-all-categories.service';
import { GetCategoryService } from '../../core/usecase/category/get-category.service';
import { UpdateCategoryService } from '../../core/usecase/category/update-category.service';
import { DeleteCategoryService } from '../../core/usecase/category/delete-category.service';
import { CategoryController } from '../controller/category';

import { ItemRepository } from '../repository/item.repository';
import { ItemRepositoryInterface } from '../../core/repository/item-repository.interface';
import { GetAllItemsService } from 'core/usecase/item/get-all-items.service';
import { GetItemService } from '../../core/usecase/item/get-item.service';
import { GetAllItemsByCategoryService } from 'core/usecase/item/get-all-by-category.service';
import { CreateItemService } from '../../core/usecase/item/create-item.service';
import { UpdateItemService } from '../../core/usecase/item/update-item.service';
import { DeleteItemService } from '../../core/usecase/item/delete-item.service';
import { ItemController } from '../controller/item';

import { ProductRepository } from '../repository/product.repository';
import { ProductRepositoryInterface } from '../../core/repository/product-repository.interface';
import { CreateProductService } from '../../core/usecase/product/create-product.service';
import { ProductController } from '../controller/product';

import { AuthService } from '../../core/usecase/auth/auth.service';
import { AuthController } from '../controller/auth';

import { UserRepository } from '../repository/user.repository';
import { UserRepositoryInterface } from '../../core/repository/user-repository.interface';
import { GetAllUsersService } from '../../core/usecase/user/get-all-users.service';
import { CreateUserService } from '../../core/usecase/user/create-user.service';
import { UserController } from '../controller/user';

import { KafkaProducer } from '../message-broker/kafka-producer/kafka-producer';

export function addDependencyInjectionConfig(): void {
  container.register('HealthCheckController', { useClass: HealthCheckController });

  container.register('AuthController', { useValue: AuthController });
  container.register('AuthService', { useValue: AuthService });

  container.register('UserController', { useValue: UserController });
  container.register('GetAllUsersService', { useValue: GetAllUsersService });
  container.register('CreateUserService', { useValue: CreateUserService });
  container.register('UserRepositoryInterface', { useValue: UserRepository });

  container.register('CatalogController', { useValue: CatalogController });
  container.register('GetAllCatalogsService', { useValue: GetAllCatalogsService });
  container.register('GetAllCatalogsByMerchantService', { useValue: GetAllCatalogsByMerchantService });
  container.register('GetCatalogService', { useValue: GetCatalogService });
  container.register('CreateCatalogService', { useValue: CreateCatalogService });
  container.register('UpdateCatalogService', { useValue: UpdateCatalogService });
  container.register('DeleteCatalogService', { useValue: DeleteCatalogService });
  container.register('CatalogRepositoryInterface', { useValue: CatalogRepository });

  container.register('MerchantController', { useValue: MerchantController });
  container.register('GetAllMerchantsService', { useValue: GetAllMerchantsService });
  container.register('GetMerchantService', { useValue: GetMerchantService });
  container.register('CreateMerchantService', { useValue: CreateMerchantService });
  container.register('UpdateMerchantService', { useValue: UpdateMerchantService });
  container.register('DeleteMerchantService', { useValue: DeleteMerchantService });
  container.register('MerchantRepositoryInterface', { useValue: MerchantRepository });

  container.register('CategoryController', { useValue: CategoryController });
  container.register('GetAllCategoriesService', { useValue: GetAllCategoriesService });
  container.register('GetCategoryService', { useValue: GetCategoryService });
  container.register('CreateCategoryService', { useValue: CreateCategoryService });
  container.register('UpdateCategoryService', { useValue: UpdateCategoryService });
  container.register('DeleteCategoryService', { useValue: DeleteCategoryService });
  container.register('CategoryRepositoryInterface', { useValue: CategoryRepository });

  container.register('ItemController', { useValue: ItemController });
  container.register('GetAllItemsService', { useValue: GetAllItemsService });
  container.register('GetItemService', { useValue: GetItemService });
  container.register('GetAllItemsByCategoryService', { useValue: GetAllItemsByCategoryService });
  container.register('CreateItemService', { useValue: CreateItemService });
  container.register('UpdateItemService', { useValue: UpdateItemService });
  container.register('DeleteItemService', { useValue: DeleteItemService });
  container.register('ItemRepositoryInterface', { useValue: ItemRepository });

  container.register('ProductController', { useValue: ProductController });
  container.register('CreateProductService', { useValue: CreateProductService });
  container.register('ProductRepositoryInterface', { useValue: ProductRepository });

  container.registerSingleton('KafkaProducer', KafkaProducer);
  
}
