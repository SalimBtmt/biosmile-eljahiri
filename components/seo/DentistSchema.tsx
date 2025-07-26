import { getDentistSchema, getDentalServicesSchema, getFAQSchema } from '@/lib/schema-data';
import SchemaMarkup from './SchemaMarkup';

interface DentistSchemaProps {
  includeFAQ?: boolean;
  includeServices?: boolean;
}

export default function DentistSchema({ 
  includeFAQ = false, 
  includeServices = false 
}: DentistSchemaProps) {
  
  const schemas: any[] = [getDentistSchema()];
  
  if (includeServices) {
    schemas.push(getDentalServicesSchema());
  }
  
  if (includeFAQ) {
    schemas.push(getFAQSchema());
  }
  
  return <SchemaMarkup schema={schemas} key="dentist" />;
}
