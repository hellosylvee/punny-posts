class Pun < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :gif, optional: true

  def self.todays_puns
    self.where("created_at >= ?", Time.zone.now.beginning_of_day)
  end

  def self.puns_by_day(date)
    self.where("created_at >= ? AND created_at <= ?", date.beginning_of_day, date.end_of_day)
  end
end
