module HomeHelper
  def tel_to(phone_number)
    phone_number = number_to_phone phone_number, country_code: 38
    link_to phone_number, "tel:#{phone_number}"
  end
end
